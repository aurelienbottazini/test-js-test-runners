
import sum1251 from '../sum1251.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 15 + 82 to equal 97 + offset 0.3361130562555207', (t) => {
  assert.strictEqual(sum1251(15, 82), 97 + 0.3361130562555207);
});
