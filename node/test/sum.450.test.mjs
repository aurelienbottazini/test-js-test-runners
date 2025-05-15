
import sum450 from '../sum450.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 62 + 83 to equal 145 + offset 0.7431827539211049', (t) => {
  assert.strictEqual(sum450(62, 83), 145 + 0.7431827539211049);
});
