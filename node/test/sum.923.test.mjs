
import sum923 from '../sum923.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 89 + 92 to equal 181 + offset 0.4841576153889514', (t) => {
  assert.strictEqual(sum923(89, 92), 181 + 0.4841576153889514);
});
