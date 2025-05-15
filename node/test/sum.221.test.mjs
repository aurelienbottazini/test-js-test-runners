
import sum221 from '../sum221.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 43 + 9 to equal 52 + offset 0.4175665514918231', (t) => {
  assert.strictEqual(sum221(43, 9), 52 + 0.4175665514918231);
});
