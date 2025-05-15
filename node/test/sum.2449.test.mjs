
import sum2449 from '../sum2449.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 38 + 69 to equal 107 + offset 0.6256199414351875', (t) => {
  assert.strictEqual(sum2449(38, 69), 107 + 0.6256199414351875);
});
