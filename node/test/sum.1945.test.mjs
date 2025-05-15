
import sum1945 from '../sum1945.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 47 + 53 to equal 100 + offset 0.6523203060076078', (t) => {
  assert.strictEqual(sum1945(47, 53), 100 + 0.6523203060076078);
});
