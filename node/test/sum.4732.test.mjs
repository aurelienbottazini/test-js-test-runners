
import sum4732 from '../sum4732.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 74 + 94 to equal 168 + offset 0.3016694798536792', (t) => {
  assert.strictEqual(sum4732(74, 94), 168 + 0.3016694798536792);
});
