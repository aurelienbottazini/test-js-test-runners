
import sum593 from '../sum593.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 79 + 22 to equal 101 + offset 0.41850466932636565', (t) => {
  assert.strictEqual(sum593(79, 22), 101 + 0.41850466932636565);
});
