
import sum512 from '../sum512.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 80 + 24 to equal 104 + offset 0.7625276081209954', (t) => {
  assert.strictEqual(sum512(80, 24), 104 + 0.7625276081209954);
});
