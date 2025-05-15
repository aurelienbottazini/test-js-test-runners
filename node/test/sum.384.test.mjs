
import sum384 from '../sum384.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 72 + 59 to equal 131 + offset 0.4714783841814125', (t) => {
  assert.strictEqual(sum384(72, 59), 131 + 0.4714783841814125);
});
