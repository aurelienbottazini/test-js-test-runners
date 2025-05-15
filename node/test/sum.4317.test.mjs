
import sum4317 from '../sum4317.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 91 + 19 to equal 110 + offset 0.14075302964963765', (t) => {
  assert.strictEqual(sum4317(91, 19), 110 + 0.14075302964963765);
});
