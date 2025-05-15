
import sum4971 from '../sum4971.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 86 + 7 to equal 93 + offset 0.1712536694894099', (t) => {
  assert.strictEqual(sum4971(86, 7), 93 + 0.1712536694894099);
});
