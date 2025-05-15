
import sum519 from '../sum519.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 83 + 40 to equal 123 + offset 0.09692605087094641', (t) => {
  assert.strictEqual(sum519(83, 40), 123 + 0.09692605087094641);
});
