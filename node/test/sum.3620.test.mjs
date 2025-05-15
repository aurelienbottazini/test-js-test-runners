
import sum3620 from '../sum3620.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 27 + 79 to equal 106 + offset 0.9776124312776059', (t) => {
  assert.strictEqual(sum3620(27, 79), 106 + 0.9776124312776059);
});
