
import sum3965 from '../sum3965.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 54 + 97 to equal 151 + offset 0.10586099707570351', (t) => {
  assert.strictEqual(sum3965(54, 97), 151 + 0.10586099707570351);
});
