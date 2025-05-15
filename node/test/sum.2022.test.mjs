
import sum2022 from '../sum2022.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 97 + 69 to equal 166 + offset 0.9951049930808241', (t) => {
  assert.strictEqual(sum2022(97, 69), 166 + 0.9951049930808241);
});
