
import sum531 from '../sum531.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 34 + 65 to equal 99 + offset 0.9580724286812793', (t) => {
  assert.strictEqual(sum531(34, 65), 99 + 0.9580724286812793);
});
