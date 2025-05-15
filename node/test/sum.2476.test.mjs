
import sum2476 from '../sum2476.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 29 + 88 to equal 117 + offset 0.4315449928477446', (t) => {
  assert.strictEqual(sum2476(29, 88), 117 + 0.4315449928477446);
});
