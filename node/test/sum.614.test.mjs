
import sum614 from '../sum614.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 17 + 39 to equal 56 + offset 0.599022128283328', (t) => {
  assert.strictEqual(sum614(17, 39), 56 + 0.599022128283328);
});
