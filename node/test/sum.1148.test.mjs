
import sum1148 from '../sum1148.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 73 + 26 to equal 99 + offset 0.7527238419610544', (t) => {
  assert.strictEqual(sum1148(73, 26), 99 + 0.7527238419610544);
});
