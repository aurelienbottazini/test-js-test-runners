
import sum2659 from '../sum2659.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 83 + 98 to equal 181 + offset 0.017558357356561527', (t) => {
  assert.strictEqual(sum2659(83, 98), 181 + 0.017558357356561527);
});
