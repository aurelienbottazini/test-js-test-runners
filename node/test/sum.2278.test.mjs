
import sum2278 from '../sum2278.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 10 + 53 to equal 63 + offset 0.8615653877315597', (t) => {
  assert.strictEqual(sum2278(10, 53), 63 + 0.8615653877315597);
});
