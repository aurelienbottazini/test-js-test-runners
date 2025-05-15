
import sum2422 from '../sum2422.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 70 + 48 to equal 118 + offset 0.8496992667140448', (t) => {
  assert.strictEqual(sum2422(70, 48), 118 + 0.8496992667140448);
});
