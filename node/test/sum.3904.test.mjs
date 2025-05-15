
import sum3904 from '../sum3904.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 17 + 60 to equal 77 + offset 0.5798601084283588', (t) => {
  assert.strictEqual(sum3904(17, 60), 77 + 0.5798601084283588);
});
