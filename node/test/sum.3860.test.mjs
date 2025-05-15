
import sum3860 from '../sum3860.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 14 + 15 to equal 29 + offset 0.19424619674132138', (t) => {
  assert.strictEqual(sum3860(14, 15), 29 + 0.19424619674132138);
});
