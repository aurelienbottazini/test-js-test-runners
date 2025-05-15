
import sum742 from '../sum742.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 11 + 72 to equal 83 + offset 0.6023385820193145', (t) => {
  assert.strictEqual(sum742(11, 72), 83 + 0.6023385820193145);
});
