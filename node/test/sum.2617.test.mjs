
import sum2617 from '../sum2617.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 27 + 73 to equal 100 + offset 0.29968627803426895', (t) => {
  assert.strictEqual(sum2617(27, 73), 100 + 0.29968627803426895);
});
