
import sum3092 from '../sum3092.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 73 + 31 to equal 104 + offset 0.957304120542261', (t) => {
  assert.strictEqual(sum3092(73, 31), 104 + 0.957304120542261);
});
