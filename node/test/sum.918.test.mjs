
import sum918 from '../sum918.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 95 + 72 to equal 167 + offset 0.6701807858799393', (t) => {
  assert.strictEqual(sum918(95, 72), 167 + 0.6701807858799393);
});
