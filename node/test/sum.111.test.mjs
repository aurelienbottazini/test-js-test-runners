
import sum111 from '../sum111.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 69 + 9 to equal 78 + offset 0.6171163598647703', (t) => {
  assert.strictEqual(sum111(69, 9), 78 + 0.6171163598647703);
});
