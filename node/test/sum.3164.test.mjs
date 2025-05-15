
import sum3164 from '../sum3164.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 17 + 44 to equal 61 + offset 0.2549333711995181', (t) => {
  assert.strictEqual(sum3164(17, 44), 61 + 0.2549333711995181);
});
