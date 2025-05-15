
import sum2690 from '../sum2690.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 59 + 2 to equal 61 + offset 0.19650621755692588', (t) => {
  assert.strictEqual(sum2690(59, 2), 61 + 0.19650621755692588);
});
