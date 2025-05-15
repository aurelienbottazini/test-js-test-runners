
import sum4171 from '../sum4171.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 34 + 76 to equal 110 + offset 0.77935723479145', (t) => {
  assert.strictEqual(sum4171(34, 76), 110 + 0.77935723479145);
});
