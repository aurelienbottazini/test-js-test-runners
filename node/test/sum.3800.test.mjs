
import sum3800 from '../sum3800.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 42 + 40 to equal 82 + offset 0.6535348455936724', (t) => {
  assert.strictEqual(sum3800(42, 40), 82 + 0.6535348455936724);
});
