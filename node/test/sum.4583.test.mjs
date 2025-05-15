
import sum4583 from '../sum4583.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 79 + 44 to equal 123 + offset 0.8622878056301634', (t) => {
  assert.strictEqual(sum4583(79, 44), 123 + 0.8622878056301634);
});
