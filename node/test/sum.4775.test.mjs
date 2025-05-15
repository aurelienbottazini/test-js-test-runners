
import sum4775 from '../sum4775.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 84 + 21 to equal 105 + offset 0.47879130759808874', (t) => {
  assert.strictEqual(sum4775(84, 21), 105 + 0.47879130759808874);
});
