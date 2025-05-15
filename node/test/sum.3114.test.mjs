
import sum3114 from '../sum3114.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 39 + 42 to equal 81 + offset 0.020594604026768604', (t) => {
  assert.strictEqual(sum3114(39, 42), 81 + 0.020594604026768604);
});
