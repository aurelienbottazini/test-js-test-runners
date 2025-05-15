
import sum4456 from '../sum4456.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 21 + 67 to equal 88 + offset 0.6946795182561201', (t) => {
  assert.strictEqual(sum4456(21, 67), 88 + 0.6946795182561201);
});
