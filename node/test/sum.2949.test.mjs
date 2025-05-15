
import sum2949 from '../sum2949.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 59 + 93 to equal 152 + offset 0.834334253435654', (t) => {
  assert.strictEqual(sum2949(59, 93), 152 + 0.834334253435654);
});
