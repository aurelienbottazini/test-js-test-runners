
import sum2952 from '../sum2952.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 27 + 32 to equal 59 + offset 0.275161304065937', (t) => {
  assert.strictEqual(sum2952(27, 32), 59 + 0.275161304065937);
});
