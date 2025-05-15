
import sum462 from '../sum462.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 43 + 89 to equal 132 + offset 0.7697641013903253', (t) => {
  assert.strictEqual(sum462(43, 89), 132 + 0.7697641013903253);
});
