
import sum2499 from '../sum2499.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 54 + 85 to equal 139 + offset 0.5244459916897374', (t) => {
  assert.strictEqual(sum2499(54, 85), 139 + 0.5244459916897374);
});
