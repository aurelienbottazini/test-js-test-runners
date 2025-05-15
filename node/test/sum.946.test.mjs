
import sum946 from '../sum946.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 78 + 79 to equal 157 + offset 0.8069046491341683', (t) => {
  assert.strictEqual(sum946(78, 79), 157 + 0.8069046491341683);
});
